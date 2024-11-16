import React from 'react';
import { useNavigate } from 'react-router-dom';

function News() {
  const navigate = useNavigate();
  const articles = [
    {
      title: "Trump taps Florida lawmaker Mike Waltz to be national security adviser",
      description: "Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump's pick for UN ambassador?",
      image: "../../../NewsPagePic1.png",
      main: true
    },
    {
      title: "Climate fight 'bigger than one election,' says Biden's top envoy",
      description:'COP29 climate summit opens amid fears the US election will derail efforts to stop the planet heating up.',
      image: "NewsPagePic2.png",
      time: "5 hours ago",
      category: "Climate",
    },
    {
      title: "Saudi crown prince says Israel committing 'genocide' in Gaza",
      description:'Mohamed Bin Salman was speaking at the opening of a summit of Muslim and Arab leaders in Riyadh.',
      image: "NewsPagePic3.png",
      time: "8 hrs ago | Climate",
      category: "Climate",
    },
    {
      title: "India's celebrity top judge: An icon or a pushover?",
      description:'Justice DY Chandrachud retired as India’s chief justice on Sunday. Many are debating his legacy.',
      image: "NewsPagePic4.png",
      time: "9 hours ago",
      category: "Asia",
    },
    {
      title: "China roads blocked by thousands of cyclists in night quest for dumplings",
      description:'It started as a social media trend but brought traffic gridlock between two cities.',
      image: "NewsPagePic5.png",
      time: "21 hours ago",
      category: "Asia",
    },
    {
      title: "Climate fight 'bigger than one election', says Biden’s top envoy",
      description:'COP29 climate summit opens amid fears the US election will derail efforts to stop the planet heating up.',
      image: "NewsPagePic2.png",
      time: "1 day ago",
      category: "China",
    },
    {
      title: "Saudi crown prince says Israel committing 'genocide' in Gaza",
      description:'Mohamed Bin Salman was speaking at the opening of a summit of Muslim and Arab leaders in Riyadh.',
      image: "NewsPagePic3.png",
      time: "2 days ago",
      category: "US Politics",
    },
    {
      title: "India's celebrity top judge: An icon or a pushover?",
      description:'Justice DY Chandrachud retired as India’s chief justice on Sunday. Many are debating his legacy.',
      image: "NewsPagePic4.png",
      time: "5 hours ago",
      category: "Climate",
    },
    {
      title: "China roads blocked by thousands of cyclists in night quest for dumplings",
      description:'It started as a social media trend but brought traffic gridlock between two cities.',
      image: "NewsPagePic5.png",
      time: "2 days ago",
      category: "Europe",
    },
    {
      title: "Melania Trump, enigmatic first lady who might do it differently this time.",
      description:'Described by some as an "enigma", Mrs Trump is expected to return to her White House duties "on her own terms".',
      image: "NewsPagePic6.png",
      time: "5 hours ago",
      category: "Climate",
    },
    {
      title: "Zelensky says Russia has 50,000 troops in Kursk.",
      description:'Zelensky in trouble with respect to his army which is captured by Russian military he want to meet trump',
      image: "NewsPagePic7.png",
      time: "3 days ago",
      category: "Japan",
    },
    {
      title: "Japan's Ishiba stays as PM despite election setback",
      description:'Japan in trouble with respect to his army which is captured by Russian military he want to meet trump',
      image: "NewsPagePic8.png",
      time: "5 hours ago",
      category: "Climate",
    },
    {
      title: "Bitcoin tops record $60,000 as Trump news sweep of US Congress",
      description:'On the campaign trail the president-elect pledged to make America "the crypto capital of the planet".',
      image: "NewsPagePic9.png",
      time: "3 days ago",
      category: "Business",
    },
  ];
  const mainArticle = articles.find((article) => article.main);

  const clickArticle = () => {
    navigate("/NewsBlog");
  };

  return (
    <div className="px-8 pt-32 max-w-[1600px] mx-auto">
      <h1 className="text-[36px] font-extrabold mb-4 border-b border-gray-600">NEWS</h1>

      {/* Main Article */}
      {mainArticle && (
        <div className="flex gap-12 items-center pt-8 max-[1050px]:flex-col-reverse max-[1050px]:gap-0" >
          <div className="min-[1050px]:max-w-[390px]  w-full">
            <h2 className="text-[36px] font-extrabold mb-2" onClick={clickArticle}>{mainArticle.title}</h2>
            <p className="text-[25px] font-semibold mb-2" >{mainArticle.description}</p>
          </div>
          <div className='w-full min-[1050px]:min-h-[510px] ' onClick={clickArticle}>
            <img
              src={mainArticle.image}
              alt="Main news"
              className="w-full min-h-[510px] max-h-[510px] max-[1050px]:min-h-full"
            />
          </div>
        </div>
      )}


      {/* Other Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-16">
        {articles
          .filter((article) => !article.main) // Exclude the main article
          .map((article, index) => (
            <div key={index} className="bg-white " onClick>
              <img
                src={article.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-50 object-cover mb-2"
              />
              <h3 className="text-lg font-semibold" >{article.title}</h3>
              <p className='text-[13px] text-[#040404] pb-4'>{article.description}</p>
              <p className="text-sm text-gray-500">
                {article.time} | {article.category}
              </p>
            </div>
          ))}
      </div>
    </div >
  );
}

export default News;
