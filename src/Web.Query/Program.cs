using System;
using System.Configuration;
using Microsoft.Owin.Hosting;

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

            WebApp.Start<Startup>(baseUrl);

            Console.WriteLine($"Listening at {baseUrl}");
            Console.ReadLine();
        }
    }
}
