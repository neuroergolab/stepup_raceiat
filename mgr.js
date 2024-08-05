define(['managerAPI', 'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager) {

    let API = new Manager();

    API.setName('mgr');
    API.addSettings('skip',true);
	init_data_pipe(API, 'f0ZJQg2FYO7i',  {file_type:'csv'});	


    API.addTasksSet({
        choose: [{
            type: 'quest',
            name: 'choose',
            scriptUrl: 'choose.js'
        }],

        race: [{
            type: 'time',
            name: 'race',
            scriptUrl: 'race.js'
        }]
    });

    API.addSequence([
	    {
	        mixer:'repeat',
	        times:10, 
	        data :
	        [
	            {inherit:'choose'},
	            {
	                mixer:'multiBranch', 
	                branches :
	                [

	                    { 
	                        conditions:[{compare: 'global.choose.questions.choice.response', to: 'race'}],
	                        data:[{inherit:'race'}]
	                    }
	                ]
	            }
	       ]
	    }
    ]);

    return API.script;
});
