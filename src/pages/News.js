import React from 'react';

function News() {
  // Main article data
  const mainArticle = {
    title: "Trump taps Florida lawmaker Mike Waltz to be national security adviser",
    description: "Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?Two sources familiar with the matter told CBS News, the BBC's US news partner, that Trump is expected to pick the Florida congressman. Who is Elise Stefanik, Trump’s pick for UN ambassador?",
    image: "../../../NewsPagePic1.png",
  };

  // Array of other articles
  const articles = [
    {
      title: "Climate fight 'bigger than one election,' says Biden's top envoy",
      image: "NewsPagePic2.png",
      time: "5 hours ago",
      category: "Climate",
    },
    {
      title: "Climate fight 'bigger than one election,' says Biden's top envoy",
      image: "NewsPagePic2.png",
      time: "5 hours ago",
      category: "Climate",
    },
    {
      title: "Saudi crown prince says 'genocide' happening in Gaza",
      image: "NewsPagePic3.png",
      time: "9 hours ago",
      category: "Middle East",
    },
    {
      title: "India’s celebrity top judge: An icon or a 'showboater'?",
      image: "NewsPagePic4.png",
      time: "21 hours ago",
      category: "Asia",
    },
    {
      title: "China roads blocked by night curfews after dumping of goods",
      image: "NewsPagePic2.png",
      time: "1 day ago",
      category: "China",
    },
    {
      title: "Melania Trump, enigmático detrás del apoyo de Trump",
      image: "NewsPagePic3.png",
      time: "2 days ago",
      category: "US Politics",
    },
    {
      title: "Climate fight 'bigger than one election,' says Biden's top envoy",
      image: "NewsPagePic2.png",
      time: "5 hours ago",
      category: "Climate",
    },
    {
      title: "Zelensky says Russia has 50,000 troops in Kursk",
      image: "NewsPagePic7.png",
      time: "2 days ago",
      category: "Europe",
    },
    {
      title: "Climate fight 'bigger than one election,' says Biden's top envoy",
      image: "NewsPagePic2.png",
      time: "5 hours ago",
      category: "Climate",
    },
    {
      title: "Japan's instability a delicate election setback",
      image: "NewsPagePic5.png",
      time: "3 days ago",
      category: "Japan",
    },
    {
      title: "Climate fight 'bigger than one election,' says Biden's top envoy",
      image: "NewsPagePic2.png",
      time: "5 hours ago",
      category: "Climate",
    },
    {
      title: "Bitcoin tops record $60,000 as Trump news sweep of US Congress",
      image: "NewsPagePic9.png",
      time: "3 days ago",
      category: "Business",
    },
  ];

  return (
    <div className="p-4 pt-20 mt-8 ">
      <h1 className="text-2xl font-extrabold mb-4 border-b border-gray-300">NEWS</h1>

      {/* Main Article */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8">
        <div className="p-4">
          <h2 className="text-2xl font-extrabold mb-2">{mainArticle.title}</h2>
          <p className="text-gray-600 font-bold mb-2">{mainArticle.description}</p>
        </div>
        <div>
          <img
            src={mainArticle.image}
            alt="Main news"
            className="w-full h-100 object-cover"
          />
        </div>
      </div>


      {/* Other Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white  p-4">
            <img
              src={article.image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-50 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
            <p className="text-sm text-gray-500">
              {article.time} | {article.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
