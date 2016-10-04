namespace Contracts.Migrations
{
    using System.Data.Entity.Migrations;

    public partial class PopulatePositions : DbMigration
    {
        public override void Up()
        {
            Sql("SET IDENTITY_INSERT Positions ON");
            Sql("INSERT INTO Positions (Id, Name) VALUES (1, 'Tester')");
            Sql("INSERT INTO Positions (Id, Name) VALUES (2, 'Programista')");
            Sql("SET IDENTITY_INSERT Positions OFF");
        }

        public override void Down()
        {
            Sql("DELETE FROM Positions WHERE Id IN (1, 2)");
        }
    }
}
