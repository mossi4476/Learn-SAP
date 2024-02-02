const cds = require("@sap/cds");
const { Students } = cds.entities("myCompany.hr.lms");

/**
 * Function for handling READ and CREATE operations for the mysrvdemo service.
 *
 * @param {srv} srv - the service instance
 * @return {Promise} the result of the READ or CREATE operation
 */

const mysrvdemo = (srv) => {
    srv.on("READ", "GetStudent", (req, res) => {
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
}


module.exports = mysrvdemo;
