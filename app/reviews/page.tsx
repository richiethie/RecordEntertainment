import Image from 'next/image';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  image?: string;
}

const reviews: Review[] = [
  {
    name: 'Brooke D',
    rating: 5,
    text: 'WOW! Where do I even start? We had Andy as our DJ for our wedding this past Saturday and he was absolutely amazing from the ceremony all the way to the end of the night. He was constantly checking in with us to make sure we were doing well and asking if there were different songs we wanted to be played. He did SO well at feeling out the guests and played all the perfect songs to make sure everyone was having a good time. There was not a second that we did not have people out on that dance floor enjoying themselves and for that we are so grateful! All we asked for was to make sure our guests had a great time and Andy delivered! I have never been so impressed with a wedding DJ and would recommend him to ANYONE. Thank you so much Andy and the Record Entertainment team!! ❤️🩵',
    date: '10/15/2025',
  },
  {
    name: 'Abigail',
    rating: 5,
    text: 'Absolutely love this team, especially our DJ\'s, Josh and Ike! They respected our wishes and had our crowd dancing all night! Our guests raved about the song choices and volume level not being too loud that people could still have conversations! They were flexible and accommodating to our two level venue. We are so grateful to have chosen them! Highly recommend!!',
    date: '10/22/2025',
  },
  {
    name: 'Jessica Williams',
    rating: 5,
    text: 'I had the pleasure of serving as both the Officiant and Day-of Coordinator for a wedding where Kevin provided the sound and music for the ceremony, cocktail hour, dinner, and reception. From the start, he was professional, responsive, and well-organized - answering emails promptly and providing key details ahead of the big day. On the day of the wedding, Kevin went above and beyond. He set me up with a headset mic that worked flawlessly, even in the intense Wisconsin winds, allowing me to officiate Kali and Tyler\'s outdoor ceremony without issues. He made clear and timely announcements throughout the evening and kept the energy going with great music choices that kept guests engaged and the celebration flowing smoothly. Kevin was fantastic to work with and provided a top-notch setup. I\'d gladly work with him again and highly recommend his services for any event!',
    date: '09/15/2025',
  },
  {
    name: 'Claire Skivington-Green',
    rating: 5,
    text: 'We highly recommend Record Entertainment! Our DJ, Alex, was professional, timely, and had a positive attitude! He met with us prior to our wedding and was really mindful of our needs. He had great ideas for dinner music and reception flow (but also honored our feedback). We got lots of compliments on the dinner and reception music. Also, their client portal is super easy to use and they are great communicators. You need them for your event!',
    date: '09/20/2025',
  },
  {
    name: 'Alexandra Vredeveld',
    rating: 5,
    text: 'Kevin was our DJ for our August Wedding and we could not recommend him enough!! From the very first meeting I felt at ease as he was personable, professional and knowledgeable. He listened to all of our requests and our guests raved about our music and dance floor. He also set up mics and controlled music for our ceremony and it was absolutely perfect. Music was very important to me to get right for our day and Kevin exceeded all expectations. Thank you Record Entertainment!!',
    date: '09/10/2025',
  },
  {
    name: 'Abby Jensen',
    rating: 5,
    text: 'DJ Andy was great! He talked with us a few weeks ahead of time after we filled out a questionnaire about everything we wanted and made sure we were happy with everything. He was super early on our wedding day and was so kind to us and everyone he talked to! He kept checking in on us and making sure he was playing the music we wanted and took everyone\'s requests! People had so much fun on the dance floor with DJ Andy! We would highly recommend him!',
    date: '04/15/2025',
  },
  {
    name: 'Tanner Kattre',
    rating: 5,
    text: 'Kerry was a great dj for our wedding-very communicative and kept the dance floor full. We would definitely recommend him and record entertainment',
    date: '06/20/2025',
  },
  {
    name: 'Dan and Rachel Vlach',
    rating: 5,
    text: 'We worked with Tom Otte for our wedding and he was fantastic! We did a thorough review of ideas/wishes a few days before, and Tom made sure we had covered our bases and provided suggestions on things we had missed. Day of, Tom was great at keeping the guests energized and checking in with us. He was very accommodating at transitioning between ceremony, cocktail hour, and reception spaces. We had several guests come up and tell us that Tom was amazing and everyone had a lot of fun.',
    date: '11/15/2022',
  },
  {
    name: 'Austin Wiegand',
    rating: 5,
    text: 'My experience with Record Entertainment was nothing but amazing. From the very beginning stage of getting a quote to the wedding day. Kevin was always so helpful & very responsive when I had questions & made this process so easy. We had DJ Paul & wow, does that guy know how to keep the party going. From the initial meeting/going over things to all the last minute questions/requests, he was wonderful! All the guests commented how well the DJ kept people on the dance floor all night (which was our #1 request). We were very happy with DJ Paul! I HIGHLY recommend Record Entertainment for your DJ needs!',
    date: '11/15/2024',
  },
  {
    name: 'Darcy H',
    rating: 5,
    text: 'We hired Record Entertainment for our wedding ceremony and reception, and can\'t recommend them enough! Kevin was great at answering all of our questions leading up to the day. Our DJ Josh was also so wonderful. They really care about making your event exactly as you envision. We are especially grateful for Josh\'s flexibility leading up to the day. He went out of his way to accommodate any last minute changes we asked of him. Overall 10/10!',
    date: '11/10/2024',
  },
  {
    name: 'Bayley Krueger',
    rating: 5,
    text: '10/10 recommend!! DJ Andy was absolutely amazing at our wedding. He played every song we wanted & kept the guests dancing! He checked in on my husband and I continuously throughout the night to make sure we didn\'t need anything or wanted something changed. Ceremony music and sound was perfect. No hiccups. Andy was the best of the best!!',
    date: '11/05/2024',
  },
  {
    name: 'Shannon McGavock',
    rating: 5,
    text: 'Kevin was awesome. He was super accommodating to a couple of last minute requests we had and had a great attitude the entire time. Super reasonable pricing for everything you get. Would definitely recommend!',
    date: '05/15/2025',
  },
  {
    name: 'Wil Heinz',
    rating: 5,
    text: 'We recently had our wedding at The Waters in Oshkosh. Our DJ Alan was awesome to work with! Very knowledgeable and helped move the process along as it was a very busy night for us. Alan is extremely friendly and we would highly recommend him!',
    date: '11/01/2024',
  },
  {
    name: 'Sam Thompson',
    rating: 5,
    text: 'They were amazing! I knew I wanted Record entertainment for my wedding after attending a different wedding where they DJ at. Our Dj Alex was amazing and had the dance floor full all night long. I got so many compliments the day after about how great the music was and how impressed everyone was. 10/10 highly recomend!',
    date: '11/20/2024',
  },
  {
    name: 'Melanie LeNoble',
    rating: 5,
    text: 'Kerry from Record Entertainment was outstanding! He came early to set up & kept background music playing throughout the cocktail hour & through dinner. He had our dance floor packed all night and was so great at accommodating song requests throughout the night! His communication leading up to our event had me assured that we would have nothing to worry about on our big day! Huge appreciation for helping us have the best celebration on our wedding day!',
    date: '11/15/2023',
  },
  {
    name: 'Jared R.',
    rating: 5,
    text: 'All around happy with our DJ! We had a really good experience with our DJ, Kerry! He was great to work with and created a fun enviornment for us and our guests! Everyon seemed to have a ton of fun and people were dancing all night. Kerry was very accommodating to time changes and requests we had. Our timeline for the night got pushed back because the food took forever to come out and he was super easy to coordinate getting things adjusted. Thanks so much for helping us make our night so special!',
    date: '09/29/2020',
    image: '/assets/images/Jared R.webp',
  },
  {
    name: 'Taylor T.',
    rating: 5,
    text: 'Dance Floor was Always Full!! Alex did such a great job making our wedding day special! He was very professional and easy to work with. He was very flexible and was able to provide ceremony and reception music. He was a big help for our grand entrance and kept the dance floor full the entire night! It was such a fun time and would highly recommend him!',
    date: '07/12/2021',
    image: '/assets/images/Taylor.webp',
  },
  {
    name: 'Krista L.',
    rating: 5,
    text: 'Awesome Music! We really enjoyed having Record Entertainment as our dj for our wedding! Our DJ was able to keep the party going and make sure everyone had a great time! Made our night unforgettable!',
    date: '07/01/2021',
    image: '/assets/images/Krista.webp',
  },
  {
    name: 'Alexandria J.',
    rating: 5,
    text: 'Get ready to Party ALL NIGHT LONG!!! We had Mike with Record Entertainment as our DJ for our wedding. He was amazing to work with, super responsive to last minuet requests and played a wide variety of music that had people on the dance floor till the venue closed. He\'s also the perfect hype man! We are still getting compliments weeks later on how well he did. Record Entertainment & Photobooth Service is an awesome company to work with and is a great value for both services. 100 out of 10 recommend. Thanks Mike!',
    date: '06/22/2021',
    image: '/assets/images/Alexandria.webp',
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-x-hidden min-h-[30vh] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Reviews</h1>
          <p className="text-xl text-gray-300">See what our clients have to say</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border-l-4 border-primary-500 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-xl">
                    {'★'.repeat(review.rating)}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{review.text}</p>
                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-3">
                    {review.image && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    )}
                    <p className="font-semibold text-white">- {review.name}</p>
                  </div>
                  <p className="text-sm text-gray-400">Sent on {review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Create Your Own Experience?</h2>
          <p className="text-xl mb-8 text-gray-300">Contact us today to book your event</p>
          <a
            href="/contact"
            className="inline-block glass-strong bg-primary-500/90 text-black px-8 py-3 rounded-2xl font-bold hover:bg-primary-500 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

