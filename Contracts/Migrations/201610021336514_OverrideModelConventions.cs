namespace Contracts.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class OverrideModelConventions : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Contracts", "Type_Id", "dbo.Positions");
            DropIndex("dbo.Contracts", new[] { "Type_Id" });
            AlterColumn("dbo.Contracts", "Name", c => c.String(nullable: false));
            AlterColumn("dbo.Contracts", "Type_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Positions", "Name", c => c.String(nullable: false, maxLength: 255));
            CreateIndex("dbo.Contracts", "Type_Id");
            AddForeignKey("dbo.Contracts", "Type_Id", "dbo.Positions", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Contracts", "Type_Id", "dbo.Positions");
            DropIndex("dbo.Contracts", new[] { "Type_Id" });
            AlterColumn("dbo.Positions", "Name", c => c.String());
            AlterColumn("dbo.Contracts", "Type_Id", c => c.Int());
            AlterColumn("dbo.Contracts", "Name", c => c.String());
            CreateIndex("dbo.Contracts", "Type_Id");
            AddForeignKey("dbo.Contracts", "Type_Id", "dbo.Positions", "Id");
        }
    }
}
