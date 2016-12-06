using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using courseWorkDataBases.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Threading.Tasks;
using System;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace courseWorkDataBases
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            if(env.IsDevelopment())
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }
            Configuration = builder.Build();
        }




        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddApplicationInsightsTelemetry(Configuration);

            services.AddMvc();

            services.AddIdentity<IdentityUser, IdentityRole>(o =>
            {
                // configure identity options
                o.Password.RequireDigit = false;
                o.Password.RequireLowercase = false;
                o.Password.RequireUppercase = false;
                o.Password.RequireNonAlphanumeric = false;
                o.Password.RequiredLength = 6;
            }).AddEntityFrameworkStores<GroupsAppContext>();

            services.AddDbContext<GroupsAppContext>(options =>
                options.UseSqlServer("Data Source=DESKTOP-NEO5AF1\\SQLEXPRESS;Initial Catalog=CourseWorkDB;Integrated Security=True"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseApplicationInsightsRequestTelemetry();

            if(env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseApplicationInsightsExceptionTelemetry();

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseIdentity();
            app.UseMvc();

            CreateSampleData(app.ApplicationServices).Wait();
        }

        private static async Task CreateSampleData(IServiceProvider applicationServices)
        {
            using(var dbContext = applicationServices.GetService<GroupsAppContext>())
            {
                // add some users
                var userManager = applicationServices.GetService<UserManager<IdentityUser>>();

                // add editor user
                var vrady = new IdentityUser
                {
                    UserName = "vrady"                    
                };
                var result = await userManager.CreateAsync(vrady, "123456");
                await userManager.AddClaimAsync(vrady, new Claim("CanEdit", "true"));

                // add normal user
                var vakun = new IdentityUser
                {
                    UserName = "vakun"
                };
                await userManager.CreateAsync(vakun, "123456");
                await userManager.AddClaimAsync(vrady, new Claim("CanEdit", "true"));
            }
        }
    }
}
