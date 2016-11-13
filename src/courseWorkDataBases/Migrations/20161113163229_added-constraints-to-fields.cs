using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace courseWorkDataBases.Migrations
{
    public partial class addedconstraintstofields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Specialities_Id",
                table: "Groups");

            migrationBuilder.DropIndex(
                name: "IX_Groups_Id",
                table: "Groups");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "Shedules",
                maxLength: 10,
                nullable: false);

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Groups",
                nullable: false)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.CreateIndex(
                name: "IX_Groups_SpecialityId",
                table: "Groups",
                column: "SpecialityId");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "Audiences",
                nullable: false);

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Specialities_SpecialityId",
                table: "Groups",
                column: "SpecialityId",
                principalTable: "Specialities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Specialities_SpecialityId",
                table: "Groups");

            migrationBuilder.DropIndex(
                name: "IX_Groups_SpecialityId",
                table: "Groups");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "Shedules",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Groups",
                nullable: false);

            migrationBuilder.CreateIndex(
                name: "IX_Groups_Id",
                table: "Groups",
                column: "Id");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "Audiences",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Specialities_Id",
                table: "Groups",
                column: "Id",
                principalTable: "Specialities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
