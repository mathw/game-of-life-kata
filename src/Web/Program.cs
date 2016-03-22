using System;
using System.Collections.Generic;
using System.Configuration;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Hosting;
using Microsoft.Owin.StaticFiles;
using Owin;

namespace Web
{
    class Program
    {
        private static readonly string CurrentDirectoryName = AppDomain.CurrentDomain.BaseDirectory;

        static void Main()
        {
            var scheme = ConfigurationManager.AppSettings["scheme"] ?? "http";
            var host = ConfigurationManager.AppSettings["host"] ?? "localhost";
            var port = ConfigurationManager.AppSettings["port"] ?? "80";
            var path = ConfigurationManager.AppSettings["path"] ?? "";

            var baseUrl = $"{scheme}://{host}:{port}/{path}";

            WebApp.Start(baseUrl, builder => builder.UseFileServer(new FileServerOptions
            {
                StaticFileOptions = { FileSystem = new PhysicalFileSystem($"{CurrentDirectoryName}/app/game") },
                DefaultFilesOptions = { DefaultFileNames = new List<string> {"index.html", "game.html"} },
                EnableDefaultFiles = true
                
            }));

            Console.WriteLine($"Listening at {baseUrl}");
            Console.ReadLine();
        }
    }
}
