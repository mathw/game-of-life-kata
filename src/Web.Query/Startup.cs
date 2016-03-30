using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using Microsoft.Owin.Cors;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Owin;

namespace Web.Query
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            appBuilder.UseCors(CorsOptions.AllowAll);

            var config = new HttpConfiguration();
           
            config.Services.Replace(typeof(IHttpControllerActivator), new StructureMapServiceActivator());

            config.Routes.MapHttpRoute("Default", "{controller}/{id}",new { id = RouteParameter.Optional });

            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());
            config.Formatters.JsonFormatter.SerializerSettings =
                new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                };

            
            appBuilder.UseWebApi(config);

            
        }
    }
}