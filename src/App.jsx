import Card from './components/Card/card'

function App() {

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <Card title="Real Estate house" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquid."  imageUrl="https://th.bing.com/th/id/R.c57adfe8cc2888dd317b81891d25ee7b?rik=xeVuYguzq0RXng&riu=http%3a%2f%2fv.fastcdn.co%2fu%2f74655bc3%2f49958455-0-Virtuance-Real-Estat.jpg&ehk=GfsJ3MsysvWkAd39apfBRtcEVVdFeiybaA%2fvwho%2fa8g%3d&risl=&pid=ImgRaw&r=0"/>

          <Card title="Real Estate house" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquid."  imageUrl="https://yourniftyhome.com/wp-content/uploads/2023/07/95163RW-1-1080x720.jpg"/>

          <Card />
        </div>
      </div>
    </>
  )
}

export default App