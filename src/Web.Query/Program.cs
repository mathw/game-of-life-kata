using System;
using System.Configuration;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Dependencies;
using System.Web.Http.Dispatcher;
using Microsoft.Owin.Hosting;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Owin;
using StructureMap;

namespace Web.Query
{
    class Program
    {
        static void Main()
        {
            var scheme = ConfigurationManager.AppSettings["scheme"] ?? "http";
            var host = ConfigurationManager.AppSettings["host"] ?? "localhost";
            var port = ConfigurationManager.AppSettings["port"] ?? "80";
            var path = ConfigurationManager.AppSettings["path"] ?? "";

            var baseUrl = $"{scheme}://{host}:{port}/{path}";
            //var baseUrl = $"{scheme}://{host}:{port}";

            WebApp.Start<Startup>(baseUrl);

            Console.WriteLine($"Listening at {baseUrl}");
            Console.ReadLine();
        }

        public class Startup
        {
            public void Configuration(IAppBuilder appBuilder)
            {
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
}
