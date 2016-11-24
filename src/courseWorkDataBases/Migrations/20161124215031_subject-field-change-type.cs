using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace courseWorkDataBases.Migrations
{
    public partial class subjectfieldchangetype : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Subjects",
                maxLength: 50,
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Name",
                table: "Subjects",
                maxLength: 50,
                nullable: false);
        }
    }
}
