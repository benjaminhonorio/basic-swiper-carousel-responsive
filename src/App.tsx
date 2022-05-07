import { Box, Button, Container, useTheme } from '@mui/material'
// Import Swiper modules (optional, see comments)
import { A11y, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
// Import Swiper React components and hooks
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

/* 
I marked some comments with numbers in the code, so you can better understand what I'm talking about

(0) As you can see, we can wrap the carousel, aka "Swiper", in MUI (Material UI) components and have good control over it.
(1) I can have total control of the slides styles with the class "swiper-slide" through a parent container thanks to sx prop and a simple selector
(2) you can do brakpoints as usual with MUI and the swiper also has breakpoints that you can match 
(3) You can add more functionality, like effects, aria things, the dots, etc, using what they call "modules" that you can import from "swiper". Navigation module allow us to use buttons for the navigation 
(4) You can control the space between cards if you have many on sight, its pretty much like spacing in MUI, but with numbers, which are pixels.
(5) You can control how many slides you show with slidesPerView prop 
(6) You can have MUI elements inside the swiper slides 
(7) You can create the buttons as single components, and using the useSwiper hook we can give the buttons the functionality, as long as they live inside the Swiper container 
(8) but the buttons inside  Swiper live as separate entities and they are not positioned by force, so they can be wrapped with mui components and we can be happy 
(9) this one is needed to prevent clicks in links or clickable elements in the slide from triggering a movement to the next slide, I got  frustrated for a while with that behavior, but this prop fix it! you knoow, we could want to enable clicking the whole card or the title at some point to move the user to the detail page or something
solution found here: https://github.com/nolimits4web/Swiper/issues/3149#issuecomment-1044631964
(10) shows a hand grabber cursor, don't know but we could enable this one too, it depends on the ux people i guess
*/

export default function App() {
  const theme = useTheme()
  return (
    <Container // (0)
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '90vh',
      }}
    >
      <Container // (0)
        sx={{
          padding: '0px',
          maxWidth: '1200px',
          [theme.breakpoints.down(770)]: { maxWidth: '305px' }, // (2)
          '& .swiper-slide': { borderRadius: '1rem' }, // (1)
        }}
      >
        <Swiper
          watchSlidesProgress // (9)
          // grabCursor={true} // (10)
          modules={[Navigation, A11y]} // (3)
          spaceBetween={24} // (4)
          breakpoints={{ 770: { slidesPerView: 3 } }} // (2) (5)
          slidesPerView={1} // (5)
          navigation // (3)
        >
          {/* Here I'm just creating a bunch of slides to show, or like the call "SwiperSlides" */}
          {Array.from(Array(9)).map((_, i) => {
            return (
              <SwiperSlide key={i}>
                <Container // (6)
                  sx={{
                    height: '400px',
                    border: '1px solid lightgray',
                    borderRadius: '1rem',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    userSelect: 'none',
                  }}
                >
                  <p>
                    <a href='https://swiperjs.com/react'>link</a>
                    Check the docs, they are great! {` ${i}`}
                  </p>
                </Container>
              </SwiperSlide>
            )
          })}

          {/* (8) */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              paddingTop: '3rem',
            }}
          >
            {/* (7) */}
            <SlidePrevButton />
            <SlideNextButton />
          </Box>
        </Swiper>
      </Container>
    </Container>
  )
}

const buttonStyles = {
  borderRadius: '50%',
  height: '40px',
  width: '40px',
  minWidth: 'initial',
  border: '1px solid lightgray',
}

// BUTTON COMPONENTS

// (7)
function SlideNextButton() {
  const swiper = useSwiper() // (7)

  return (
    <Button
      sx={buttonStyles}
      onClick={() => swiper.slideNext()} // (7)
    >
      &gt;
    </Button>
  )
}

// (7)
function SlidePrevButton() {
  const swiper = useSwiper() // (7)

  return (
    <Button
      sx={buttonStyles}
      onClick={() => swiper.slidePrev()} // (7)
    >
      &lt;
    </Button>
  )
}
