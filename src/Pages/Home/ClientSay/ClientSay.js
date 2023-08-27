import React from 'react';
import bg from '../../../assets/img/carousel-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const ClientSay = () => {

    const clientSays = [
        {
            id: 1,
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea, id, deleniti, animi eius minus tempora mollitia eum quaerat at excepturi! Provident voluptatem veniam dolor sit facere eveniet molestias in?',
            name: 'Juyel Sarkar',
            img: 'https://i.postimg.cc/9fsCyYCJ/testimonial-1.jpg',
            profession: 'digital creator'
        },
        {
            id: 2,
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea, id, deleniti, animi eius minus tempora mollitia eum quaerat at excepturi! Provident voluptatem veniam dolor sit facere eveniet molestias in?',
            name: 'partho Sarkar',
            img: 'https://i.postimg.cc/Qt5smKMs/testimonial-2.jpg',
            profession: 'writer'
        },
        {
            id: 3,
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea, id, deleniti, animi eius minus tempora mollitia eum quaerat at excepturi! Provident voluptatem veniam dolor sit facere eveniet molestias in?',
            name: 'Suyel Sarkar',
            img: 'https://i.postimg.cc/RhBmDC3t/testimonial-3.jpg',
            profession: 'photographers'
        },
        {
            id: 4,
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea, id, deleniti, animi eius minus tempora mollitia eum quaerat at excepturi! Provident voluptatem veniam dolor sit facere eveniet molestias in?',
            name: 'rajib ahmed',
            img: 'https://i.postimg.cc/NFktqhTz/testimonial-4.jpg',
            profession: 'doctors'
        },
    ];

    return (
        <Swiper className='lg:m-20' 
        style={{background: `url(${bg})`,
                padding: '40px',
                backgroundPosition: 'center'
    }}
            spaceBetween={100}
            slidesPerView={2}
            modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            
            breakpoints={{
                320: {
                  width: 320,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 1,
                },
                1200: {
                    width: 1200,
                    slidesPerView: 2,
                }
              }}
        >
            {
                clientSays.map(client => <SwiperSlide key={client.id} className='m-2'>
                    <div className='bg-white p-10'>
                        <p>{client.comment}</p>
                        <div className='flex items-center mt-5'>
                            <img src={client.img} alt="" className='w-16 rounded' />
                            <div className='ml-2'>
                                <p className='font-bold'>{client.name}</p>
                                <p>{client.profession}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    );
};

export default ClientSay;