using System;
using System.Net.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Dispatcher;
using StructureMap;

namespace Web.Query
{
    public class StructureMapServiceActivator : IHttpControllerActivator
    {
        public StructureMapServiceActivator()
        {
            StructureMapInstanceProvider.Container = new Container(c => c.AddRegistry(new ApiRegistry()));
        }

        public IHttpController Create(HttpRequestMessage request, HttpControllerDescriptor controllerDescriptor, Type controllerType)
        {
            var controller = StructureMapInstanceProvider.Container.GetInstance(controllerType) as IHttpController;

            return controller;
        }
    }
}
