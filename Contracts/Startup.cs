using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Contracts.Startup))]
namespace Contracts
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
