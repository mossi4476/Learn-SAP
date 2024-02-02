const cds = require("@sap/cds");
const { Students } = cds.entities("myCompany.hr.lms");

/**
 * Function for handling READ and CREATE operations for the mysrvdemo service.
 *
 * @param {srv} srv - the service instance
 * @return {Promise} the result of the READ or CREATE operation
 */

const mysrvdemo = (srv) => {
    srv.on("READ", "StudentsSRV", (req, res) => {
      console.log("GET");
  
      // const { SELECT } = cds.ql(req);
      const aFilter = req.query.SELECT.where;
      console.log(aFilter);
      if (typeof aFilter !== "undefined"){
        return SELECT.from(Students).where(aFilter);
      }
    
      // if (typeof aFilter !== "undefined")
      //   return await SELECT.from(Students).where(aFilter);
      // return await SELECT.from(Students);
    });

    srv.on("CREATE", "UpdateStudent", async (req, res) => {
        let firstName = req.data.first_name;
        let lastName = req.data.last_name;
        console.log("Update Method");
        return {
          email: "sample",
          first_name: firstName,
          last_name: lastName,
        };
      });
}


module.exports = mysrvdemo;
