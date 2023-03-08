var x___ = 0;
var simplemaps_countrymap_mapdata={
   main_settings: {
    //General settings
		width: '800',
    background_color: "transparent",
    background_transparent: "yes",
    border_color: "transparent",
    pop_ups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "javascript:aptyx()",
    border_size: .5,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_url: "Abuja",
    location_color: "transparent",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "map_images/frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#1E2748",
    label_hover_color: "#1E2748",
    label_size: 15,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		 //Popup settings
     popup_color: "#1E2748",
     popup_opacity: 1,
     popup_shadow: 1,
     popup_corners: 5,
     popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
     popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    NGA2839: {
      name: "Borno",
      text: "Borno",
      label: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url:"default",
    },
    NGA2841: {
      name: "Abia",
      label: "Abia",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2842: {
      name: "Akwa Ibom",
      text: "Borno",
      description: `<div onShow="alert('hmmm')" class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2843: {
      name: "Imo",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2844: {
      name: "Rivers",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>${x___}</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2845: {
      name: "Bayelsa",
      //text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2846: {
      name: "Benue",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2847: {
      name: "Cross River",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2848: {
      name: "Taraba",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#D62B3C",
      hover_color: "#D62B3C",
      url: "default"
    },
    NGA2849: {
      name: "Kwara",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2850: {
      name: "Lagos",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2851: {
      name: "Niger",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2852: {
      name: "Ogun",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2853: {
      name: "Ondo",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2854: {
      name: "Ekiti",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2855: {
      name: "Osun",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2856: {
      name: "Oyo",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2857: {
      name: "Anambra",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2858: {
      name: "Bauchi",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2859: {
      name: "Gombe",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#D62B3C",
      hover_color: "#D62B3C",
      url: "default"
    },
    NGA2860: {
      name: "Delta",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2861: {
      name: "Edo",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2862: {
      name: "Enugu",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2863: {
      name: "Ebonyi",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2864: {
      name: "Kaduna",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2865: {
      name: "Kogi",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2866: {
      name: "Plateau",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#0AA83F",
      hover_color: "#0AA83F",
      url: "default"
    },
    NGA2867: {
      name: "Nassarawa",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2868: {
      name: "Jigawa",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#ffffff",
      hover_color: "#ffffff",
      url: "default"
    },
    NGA2869: {
      name: "Kano",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2870: {
      name: "Katsina",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2871: {
      name: "Sokoto",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2872: {
      name: "Zamfara",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2873: {
      name: "Yobe",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#D62B3C",
      hover_color: "#D62B3C",
      url: "default"
    },
    NGA2879: {
      name: "Kebbi",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    NGA2881: {
      name: "Adamawa",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#D62B3C",
      hover_color: "#D62B3C",
      url: "default"
    },
    NGA3470: {
      name: "Federal Capital Territory",
      text: "Borno",
      description: `<div class="w-[400px] h-fit bg-[#1E2748] rounded-md">
      <div class='w-full h-full bg-black/50 rounded-md p-3 flex flex-col space-y-4'>
          <font class='uppercase text-sm text-gray-400 flex flex-row'>
              <font class='w-full'>vote count</font><font class='w-full pr-3 text-right text-[#E5B805] uppercase'>see full list</font>
          </font>
          <div class='w-full h-full gap-y-2 grid grid-cols-4'>
              <font class='capitalize text-sm text-gray-100 col-span-2'>bola ahmed tinubu</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>13,000,000</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>peter obi</font>
              <font class='uppercase text-sm text-gray-100'>lp</font>
              <font class='uppercase text-sm text-gray-100'>12, 083,991</font>

              <font class='capitalize text-sm text-gray-100 col-span-2'>atiku abubakar</font>
              <font class='uppercase text-sm text-gray-100'>apc</font>
              <font class='uppercase text-sm text-gray-100'>2, 083,991</font>
          </div>
      </div>
  </div>`,
      color: "#64CCFF",
      hover_color: "#64CCFF",
      url: "default"
    },
    
  },
  labels: {
    "1": {
      name: "Borno",
      x: 884.2,
      y: 164.5,
      hide: "no",
      parent_id: "NGA2839"
    },
    "2": {
      name: "Abia",
      x: 408.1,
      y: 696.1,
      parent_id: "NGA2841"
    },
    "3": {
      name: "Akwa Ibom",
      x: 429.1,
      y: 763.3,
      parent_id: "NGA2842"
    },
    "4": {
      name: "Imo",
      x: 364.5,
      y: 709.2,
      parent_id: "NGA2843"
    },
    "5": {
      name: "Rivers",
      x: 334.5,
      y: 746.7,
      parent_id: "NGA2844"
    },
    "6": {
      name: "Bayelsa",
      x: 279.5,
      y: 771,
      parent_id: "NGA2845"
    },
    "7": {
      name: "Benue",
      x: 545.5,
      y: 561.2,
      parent_id: "NGA2846"
    },
    "8": {
      name: "Cross River",
      x: 476.4,
      y: 705.5,
      parent_id: "NGA2847"
    },
    "9": {
      name: "Taraba",
      x: 660.3,
      y: 504.9,
      parent_id: "NGA2848"
    },
    "10": {
      name: "Kwara",
      x: 181.5,
      y: 448.7,
      parent_id: "NGA2849"
    },
    "11": {
      name: "Lagos",
      x: 107.2,
      y: 622.2,
      parent_id: "NGA2850"
    },
    "12": {
      name: "Niger",
      x: 241.1,
      y: 346.2,
      parent_id: "NGA2851"
    },
    "13": {
      name: "Ogun",
      x: 38.1,
      y: 583.5,
      parent_id: "NGA2852"
    },
    "14": {
      name: "Ondo",
      x: 179.6,
      y: 600.1,
      parent_id: "NGA2853"
    },
    "15": {
      name: "Ekiti",
      x: 211.2,
      y: 524.6,
      parent_id: "NGA2854"
    },
    "16": {
      name: "Osun",
      x: 155.8,
      y: 542.5,
      parent_id: "NGA2855"
    },
    "17": {
      name: "Oyo",
      x: 72.9,
      y: 484.9,
      parent_id: "NGA2856"
    },
    "18": {
      name: "Anambra",
      x: 358.3,
      y: 658.3,
      parent_id: "NGA2857"
    },
    "19": {
      name: "Bauchi",
      x: 580.6,
      y: 296.2,
      parent_id: "NGA2858"
    },
    "20": {
      name: "Gombe",
      x: 704.3,
      y: 264.7,
      parent_id: "NGA2859"
    },
    "21": {
      name: "Delta",
      x: 277.3,
      y: 713.1,
      parent_id: "NGA2860"
    },
    "22": {
      name: "Edo",
      x: 295.3,
      y: 599.6,
      parent_id: "NGA2861"
    },
    "23": {
      name: "Enugu",
      x: 394.2,
      y: 625.6,
      parent_id: "NGA2862"
    },
    "24": {
      name: "Ebonyi",
      x: 448.1,
      y: 644.6,
      parent_id: "NGA2863"
    },
    "25": {
      name: "Kaduna",
      x: 423.8,
      y: 284.1,
      parent_id: "NGA2864"
    },
    "26": {
      name: "Kogi",
      x: 383.8,
      y: 538.4,
      parent_id: "NGA2865"
    },
    "27": {
      name: "Plateau",
      x: 583.6,
      y: 417.3,
      parent_id: "NGA2866"
    },
    "28": {
      name: "Nassarawa",
      x: 443.2,
      y: 458.3,
      parent_id: "NGA2867"
    },
    "29": {
      name: "Jigawa",
      x: 575.8,
      y: 134.3,
      parent_id: "NGA2868"
    },
    "30": {
      name: "Kano",
      x: 479.5,
      y: 169.3,
      parent_id: "NGA2869"
    },
    "31": {
      name: "Katsina",
      x: 408.7,
      y: 104.8,
      parent_id: "NGA2870"
    },
    "32": {
      name: "Sokoto",
      x: 228.1,
      y: 60,
      parent_id: "NGA2871"
    },
    "33": {
      name: "Zamfara",
      x: "305",
      y: "149.7",
      parent_id: "NGA2872"
    },
    "34": {
      name: "Yobe",
      x: 737.2,
      y: 116.5,
      parent_id: "NGA2873"
    },
    "35": {
      name: "Kebbi",
      x: 122,
      y: 151.7,
      parent_id: "NGA2879"
    },
    "36": {
      name: "Adamawa",
      x: 803.2,
      y: 379.9,
      parent_id: "NGA2881"
    },
    "37": {
      name: "FCT",
      x: 368.8,
      y: 435.1,
      parent_id: "NGA3470"
    }
  },
};