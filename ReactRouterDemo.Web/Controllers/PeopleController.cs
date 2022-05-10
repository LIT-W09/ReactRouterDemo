using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactRouterDemo.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactRouterDemo.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private IConfiguration _configuration;

        public PeopleController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [Route("getall")]
        [HttpGet]
        public List<Person> GetAll()
        {
            var repo = new PersonCarsRepository(_configuration.GetConnectionString("ConStr"));
            return repo.GetAll();
        }

        [Route("gethuman")]
        [HttpGet]
        public Human GetHuman()
        {

            return new Human
            {
                Name = "Person",
                Houses = new List<House>
                {  new House
                {
                    Address = "123 Human st",
                    Price = 972343400
                },
                new House
                {
                    Address = "456 Animal st",
                    Price = 857654
                },
                }
            };
        }
    }

    public class Human
    {
        public string Name { get; set; }
        public List<House> Houses { get; set; }
    }

    public class House
    {
        public string Address { get; set; }
        public double Price { get; set; }
    }
}
