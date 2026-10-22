
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const data = [{image : 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
                 intro : '',
                 tag :'satisfied'},
                 {image : 'https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
                  intro : '',
                   tag : 'underpaid'
          },{image : 'https://plus.unsplash.com/premium_photo-1661576762314-388502b67042?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro : '',
    tag : 'underwear'
            },{
              image : 'https://plus.unsplash.com/premium_photo-1661729968988-ca585d9da659?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
              tag : 'undercover'
            },{
              image : 'https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
              tag : 'underrulled'
            }]
  return (
    <div>
      <Section1 user = {data}/>
      <Section2 />
    </div>
  )
}

export default App
