using Game;
using StructureMap;

namespace Web.Query
{
    public class ApiRegistry : Registry
    {
        public ApiRegistry()
        {
            Scan(scan =>
            {
                scan.AssemblyContainingType<Program>();
                scan.AssemblyContainingType<Runner>();
                scan.WithDefaultConventions();
            });
        }
    }
}
