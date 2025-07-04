import React from 'react'
function Hero() {
  return (
    <div>
      <section className="flex items-center hero">
        <div className="w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption">
          <h1 className="text-3xl md:text-5xl leading-tight font-semibold">
            The House <br className="" />You've Been Dreaming
          </h1>
          <h2 className="px-8 text-base text-gray-600 md:px-0 md:text-lg my-6 tracking-wide">
            Find items you love
            <br className="hidden lg:block" />Beauty in every room
          </h2>
          <div>
            <a
              href="#browse-the-room"
              className="button-sky"
              >Explore Now</a>
          </div>
        </div>
        <div className="w-full inset-0 md:relative md:w-1/2">
          <div className="relative hero-image">
            <div className="overlay inset-0 bg-black opacity-35 z-10"></div>
            <div className="overlay right-0 bottom-0 md:inset-0">
              <button
                className="video hero-cta focus:outline-none z-30 modal-trigger"
                data-content='<div class="w-screen pb-56 md:w-88 md:pb-56 relative z-50">
                <div class="absolute w-full h-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/3h0_v1cdUIA"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>'
              ></button>
            </div>
            <img
              src={`${import.meta.env.BASE_URL}images/image-section-1.png`}
              alt="hero 1"
              className="absolute inset-0 md:relative w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero