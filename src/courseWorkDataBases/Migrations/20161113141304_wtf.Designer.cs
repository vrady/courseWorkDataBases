using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using courseWorkDataBases.Models;

namespace courseWorkDataBases.Migrations
{
    [DbContext(typeof(GroupsAppContext))]
    [Migration("20161113141304_wtf")]
    partial class wtf
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("courseWorkDataBases.Models.Group", b =>
                {
                    b.Property<int?>("Id");

                    b.Property<int>("Course");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("Quantity");

                    b.Property<int>("SpecialityId");

                    b.HasKey("Id");

                    b.HasIndex("Id");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("courseWorkDataBases.Models.Speciality", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Specialities");
                });

            modelBuilder.Entity("courseWorkDataBases.Models.Subject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Name")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("courseWorkDataBases.Models.Group", b =>
                {
                    b.HasOne("courseWorkDataBases.Models.Speciality", "Speciality")
                        .WithMany("Groups")
                        .HasForeignKey("Id")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
