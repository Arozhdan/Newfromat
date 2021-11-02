<template>
  <div>
    <div class="landing-hero pt-36 sm:pt-60 pb-20">
      <div class="container px-4 mx-auto lg:grid grid-cols-6 items-center gap-x-12">
        <div class="col-span-3">
          <div class="aspect-w-16 aspect-h-9 mb-12 lg:mb-0">
            <iframe
              class="w-full"
              src="https://www.youtube.com/embed/rHXkQsow0HQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <div class="col-span-3">
          <h2 class="text-black-0 text-5xl sm:text-7xl">
            NEWFORMAT <small class="font-normal">media</small>
          </h2>
          <p class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            Type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          </p>
        </div>
      </div>
      <div class="container px-4 mx-auto mt-24">
        <h3>Today</h3>
        <div class="grid place-self-center gap-y-5 grid-cols-2 sm:grid-cols-4 justify-between mt-12">
          <div class="text-3xl font-bold">
            132 <small class="minicaps">ads</small>
            <p class="font-normal">
              have been played
            </p>
          </div>
          <div class="text-3xl font-bold">
            431 <small class="minicaps">new</small>
            <p class="font-normal">
              some statistics
            </p>
          </div>
          <div class="text-3xl font-bold">
            231 <small class="minicaps">interactions</small>
            <p class="font-normal">
              with customers
            </p>
          </div>
          <div class="text-3xl font-bold">
            132 <small class="minicaps">ads</small>
            <p class="font-normal">
              have been played
            </p>
          </div>
        </div>
      </div>
    </div>
    <carousel
      :autoplay="true"
      :autoplay-hover-pause="true"
      :autoplay-timeout="10000"
      :loop="true"
      :speed="3000"
      :per-page-custom="[[624, 2], [768, 3]]"
      :pagination-enabled="false"
    >
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
      <slide>
        <img src="https://placeimg.com/640/880/any" alt="">
      </slide>
    </carousel>
    <div class="pt-20">
      <h3 class="text-center mb-8">
        For advertisers
      </h3>
      <p class="text-center sm:w-1/2 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores dolor in incidunt ipsam laboriosam laudantium magni nostrum perferendis. Dicta eius ipsum maiores ratione recusandae repellendus sed tempore veniam veritatis.
      </p>
    </div>
    <div class="container px-4 mx-auto pb-24">
      <div class="sm:flex justify-around">
        <img class="sm:w-1/2" src="~/assets/images/chart.svg" alt="">
        <div class="pt-12 sm:pt-28">
          <h3 class="font-medium">
            33% <br>
            More Sales
          </h3>
          <p class="text-gray-48">
            When placed at the point of decision. <br>
            - according to the Nielson case studies
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-28">
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-0">
        <h4 class="font-medium text-center">
          Solve client issues - <br>Increase customer loyalty
        </h4>
        <p class="text-center text-gray-48 w-3/4 mt-6">
          To ensure the blackest blacks and sharpest colors on every print job, the Eclipse OEM-compatible toner cartridges use just premium
        </p>
        <button class="btn btn-outline mt-6 rounded-badge px-8 font-normal lowercase text-black-0 border-2 border-gray-200">
          info@newformatmedia.com
        </button>
        <div class="mt-8">
          <p class="minicaps text-center text-gray-48">
            Social media
          </p>
          <div class="flex items-center mt-3">
            <a href="#" class="block transition duration-300 hover:opacity-60 w-5 h-5">
              <img src="~/assets/icons/facebook.svg" alt="">
            </a>
            <a href="#" class="block transition duration-300 hover:opacity-60 w-5 h-5 ml-6">
              <img src="~/assets/icons/instagram.svg" alt="">
            </a>
            <a href="#" class="block transition duration-300 hover:opacity-60 w-5 h-5 ml-6">
              <img src="~/assets/icons/twitter.svg" alt="">
            </a>
          </div>
        </div>
      </div>
      <div>
        <carousel
          class="slider-square"
          :autoplay="true"
          :autoplay-hover-pause="true"
          :autoplay-timeout="3500"
          :loop="true"
          :per-page="1"
          pagination-active-color="#ff8365"
          pagination-position="bottom-overlay"
        >
          <slide>
            <img class="w-full" src="https://placeimg.com/640/640/any" alt="">
          </slide>
          <slide>
            <img class="w-full" src="https://placeimg.com/640/640/any" alt="">
          </slide>
          <slide>
            <img class="w-full" src="https://placeimg.com/640/640/any" alt="">
          </slide>
          <slide>
            <img class="w-full" src="https://placeimg.com/640/640/any" alt="">
          </slide>
        </carousel>
      </div>
    </div>
    <div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200 rounded-none" style="background-image:url('/images/excel-image.jpg')">
      <div class="card glass rounded-none lg:card-side text-neutral-content">
        <figure class="p-6">
          <img src="https://picsum.photos/id/1005/300/200" class="shadow-lg">
        </figure>
        <div class="max-w-md card-body">
          <h2 class="card-title text-base-400">
            Get commercial offer
          </h2>
          <p class="text-sm text-base-400">
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.
          </p>
          <div class="card-actions">
            <button class="btn btn-outline mt-6 rounded-badge px-8 font-normal text-orange border-orange capitalize border-2">
              Download file
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-20">
      <h3 class="text-center">
        For venues
      </h3>
      <h4 class="text-center mb-8">
        Become <span class="text-orange">a friend</span> to your client
      </h4>
      <p class="text-center sm:w-1/2 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores dolor in incidunt ipsam laboriosam laudantium magni nostrum perferendis. Dicta eius ipsum maiores ratione recusandae repellendus sed tempore veniam veritatis.
      </p>
    </div>
    <div class="mt-6 pb-12">
      <div class="sm:flex container px-4 mx-auto items-center">
        <div class="sm:w-1/2">
          <h4>Keep your customers safe</h4>
          <ul class="list-disc pl-4 mt-6">
            <li class="minicaps mb-4">
              Lorem ipsum dolor.
            </li>
            <li class="minicaps mb-4">
              Lorem ipsum dolor.
            </li>
            <li class="minicaps mb-4">
              Lorem ipsum dolor.
            </li>
          </ul>
        </div>
        <img src="/images/sanitizer.jpg" alt="">
      </div>
      <div class="sm:flex container px-4 mx-auto items-center flex-row-reverse mt-12">
        <div class="sm:w-1/2">
          <h4>Keep your customers safe</h4>
          <ul class="list-disc pl-4 mt-6">
            <li class="minicaps mb-4">
              Lorem ipsum dolor.
            </li>
            <li class="minicaps mb-4">
              Lorem ipsum dolor.
            </li>
            <li class="minicaps mb-4">
              Lorem ipsum dolor.
            </li>
          </ul>
        </div>
        <img class="max-w-md" src="/images/watchjpg.jpg" alt="">
      </div>
    </div>
    <h4 class="text-center sm:w-1/2 mx-auto mt-12">
      How to improve safety in HORECA sector
      while reducing staff costs
    </h4>
    <ul class="w-full steps my-10">
      <li class="step minicaps step-neutral">
        Face the problems
      </li>
      <li class="step minicaps step-neutral">
        Find a solution
      </li>
      <li class="step minicaps text-orange">
        Contact us
      </li>
      <li class="step minicaps">
        Leave a review
      </li>
    </ul>
    <div class="flex px-4 justify-center py-12">
      <button class="btn btn-outline ml-16 rounded-badge px-8 font-normal capitalize text-black-0 border-2 border-gray-200">
        Contact us
      </button>
    </div>
    <div class="container px-4 mx-auto flex justify-evenly flex-wrap pt-12">
      <div class="mb-6 sm:mb-0">
        <img src="~/assets/icons/saving.svg" alt="">
        <h5 class="text-center font-medium mt-6">
          Lorem ipsum dolor.
        </h5>
      </div>
      <div class="mb-6 sm:mb-0">
        <img src="~/assets/icons/tray.svg" alt="">
        <h5 class="text-center font-medium mt-6">
          Lorem ipsum dolor.
        </h5>
      </div>
      <div class="mb-6 sm:mb-0">
        <img src="~/assets/icons/statistics.svg" alt="">
        <h5 class="text-center font-medium mt-6">
          Lorem ipsum dolor.
        </h5>
      </div>
    </div>
    <div class="py-24 flex flex-col justify-center sm:py-36">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        />
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h4 class="text-2xl">
                Get more information
              </h4>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input
                    id="email"
                    autocomplete="off"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  >
                  <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                </div>
                <div class="relative">
                  <input
                    id="phone"
                    autocomplete="off"
                    name="phone"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  >
                  <label for="phone" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone</label>
                </div>
                <div class="relative">
                  <button class="bg-orange text-white rounded-md px-2 py-1">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
