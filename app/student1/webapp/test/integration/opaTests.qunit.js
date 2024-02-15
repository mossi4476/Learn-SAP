sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'student1/student1/test/integration/FirstJourney',
		'student1/student1/test/integration/pages/GetStudentList',
		'student1/student1/test/integration/pages/GetStudentObjectPage'
    ],
    function(JourneyRunner, opaJourney, GetStudentList, GetStudentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('student1/student1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheGetStudentList: GetStudentList,
					onTheGetStudentObjectPage: GetStudentObjectPage
                }
            },
            opaJourney.run
        );
    }
);