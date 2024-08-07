 <script>

    import { base } from '$app/paths';
	import { Images } from "$lib/svelte-images";
    

    const images = [
      {
        src: `${base}/main_dr_help_blured.png`
      },
      {
        src: `${base}/main_dr_help_main_blured.png`
      },
      {
        src: `${base}/scheduling.png`
      },
      {
        src: `${base}/comments_appointment_blur.png`
      },
      {
        src: `${base}/main_dr_help_covenios_blur.png`
      },
      {
        src: `${base}/payment_dr_help_blur.png`
      },
      {
        src: `${base}/videocall_dr_blur.png`
    },
    {
        src: `${base}/lsita_medicos_dr_help_blured.png`
    },
    {
        src: `${base}/exams_android.png`
    },
    {
        src: `${base}/report_android.png`
    },
    {
        src: `${base}/recommends_dr.png`
    },
    {
        src: `${base}/edit_profile.png`
    },
    {
        src: `${base}/main_new.png`
    }
    ];
  </script>
  
  <style>
    .gallery-container {
      height: 75vh;
    }
  </style>
  
  <div class="p-4 gallery-container mb-16">
    <Images {images} numCols={5} />
  </div>