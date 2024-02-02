using myCompany.hr.lms from '../db/Students';

service mysrvdemo {
    
    @readonly entity GetStudent as projection on lms.Students;
    @updateonly entity UpdateStudent as projection on lms.Students;
    @readonly entity StudentsSRV as projection on lms.Students;

    function myfoobar(msg:String) returns String;
}