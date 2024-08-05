define(['questAPI'], function(Quest){
	var API = new Quest();


	API.addQuestionsSet('basicQ',{
		decline: false,
		type:'selectOne',
		numericValues:'true'
	});
	
	/**
	* Page prototype
	*/
	API.addPagesSet('basicPage',{
	    header: 'Choose a task',
		noSubmit:false, 
		decline: false,
		numbered: false
	});

	// ### Sequence
		API.addSequence([
            {
                inherit:'basicPage', 
                questions : [
                    {
                        inherit:'basicQ',
                        stem:'Please choose a task to experience', 
                        name:'choice',
                        answers : [
				{text:'Black/White Evaluative', value:'race'}
                        ]
                    }
                ]
            }
    ]);

	return API.script;
});




