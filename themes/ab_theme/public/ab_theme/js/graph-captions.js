var inArea,
    map = $('#skills-graph'),
    captions = {
        gritdrive: ["Grit & Drive",
            "Teaching yourself to code is largely an exercise in drive and determination.  Regardless of your natural aptitude, it's an incredibly challenging process with many roadblocks and pitfalls.  I think grit is learned trait that is a natural (and healthy) by-product of failure.  It may be the most critical component to any endeavor."],
        businessstrategy: ["Business Planning & Strategy",
            "In my day job I'm a consultant for start-up businesses in the food space.  I help them assess markets, write business plans, and sell their product.  There's always more to learn, but I've got a solid background here."],
        salespersuasion: ["Sales & Persuasion",
            "Selling your work and convincing others to follow you is an important, if perhaps underappreciated, aspect of any creative process.  I've had a lot of practice here.  Just as I'm teaching myself to code, I think experienced developers should round themselves out with soft skills like these."],
        teachingpresenting: ["Teaching & Presenting",
            "I had to do a lot of teaching and presenting in my old advertising days.  And while part of teaching is standing up in front of folks and presenting, it's also about being able to break down a complex subject into understandable parts.  I'm pretty good at that."],
        adobecs5: ["Adobe Creative Suite 5",
            "I am a practiced novice with both Adobe Photoshop and Illustrator, but have almost zero experience with InDesign, Fireworks, or Dreamweaver. I'd like to learn more about best practices in graphic design - a skill that I think is critical to being able to operate as an independent developer."],
        sql: ["SQL & the Relational Model",
            "Frameworks like Rails automate almost all database interactions, so I haven't had much practice writing my own SQL queries.  But I have a good understanding of basic relational database theory and concepts like normalization."],
        jquery: ["jQuery & Javascript",
            "I am comfortable editing other people's work in jQuery, but I have a ways to go before I am authoring my own plug-ins.  In a similar vein, I can navigate and edit Javascript code authored by others, but it's rare that I'm writing something from scratch."],
        rubyrails: ["Ruby (v1.9.3) and Rails (v3.2)",
            "Of the hard skills listed here, Ruby and the Rails framework are probably the steepest and longest mountains to climb.  Right now, I can build sophisticated apps that conform to best practices, but I have a lot to learn in the areas of TDD, Gem authoring, and the like."],
        htmlcss: ["HTML5 & CSS3",
            "While I've always dabbled in HTML & CSS, things really started to click when I took General Assembly's 10-week Front End Web Development course.  I'm currently learning more about responsive design and transitioning to coding in HAML & SASS."]
    },
    single_opts = {
        fillColor: '000000',
        fillOpacity: 0.3,
        stroke: false,
        strokeColor: 'FFFF73',
        strokeWidth: 2
    },
    all_opts = {
        fillColor: 'ffffff',
        fillOpacity: 0.6,
        stroke: true,
        strokeWidth: 2,
        strokeColor: 'ffffff'
    },
    initial_opts = {
        mapKey: 'data-name',
        isSelectable: false,
        onMouseover: function (data) {
            inArea = true;
            $('#graph-caption-header').text(captions[data.key][0]);
            $('#graph-caption-text').text(captions[data.key][1]);
            $('#graph-caption').show();
        },
        // onMouseout: function (data) {
        //     inArea = true;
        //     $('#graph-caption').hide();
        // }
    };
    opts = $.extend({}, all_opts, initial_opts, single_opts);


    // Bind to the image 'mouseover' and 'mouseout' events to activate or deactivate ALL the areas, like the
    // original demo. Check whether an area has been activated with "inArea" - IE<9 fires "onmouseover" 
    // again for the image when entering an area, so all areas would stay highlighted when entering
    // a specific area in those browsers otherwise. It makes no difference for other browsers.

    map.mapster('unbind')
        .mapster(opts)
        .bind('mouseover', function () {
            if (!inArea) {
                map.mapster('set_options', all_opts)
                    .mapster('set', true, 'all')
                    .mapster('set_options', single_opts);
            }
        }).bind('mouseout', function () {
            if (!inArea) {
                map.mapster('set', true, 'all');
            }
        });