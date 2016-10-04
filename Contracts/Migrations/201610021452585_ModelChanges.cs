namespace Contracts.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModelChanges : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Contracts", name: "Type_Id", newName: "TypeId");
            RenameIndex(table: "dbo.Contracts", name: "IX_Type_Id", newName: "IX_TypeId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Contracts", name: "IX_TypeId", newName: "IX_Type_Id");
            RenameColumn(table: "dbo.Contracts", name: "TypeId", newName: "Type_Id");
        }
    }
}
