sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'student/test/integration/FirstJourney',
		'student/test/integration/pages/StudentsSRVList',
		'student/test/integration/pages/StudentsSRVObjectPage'
    ],
    function(JourneyRunner, opaJourney, StudentsSRVList, StudentsSRVObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('student') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheStudentsSRVList: StudentsSRVList,
					onTheStudentsSRVObjectPage: StudentsSRVObjectPage
                }
            },
            opaJourney.run
        );
    }
);