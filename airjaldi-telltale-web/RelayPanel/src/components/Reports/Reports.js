import React , {useState} from 'react'
import Select from 'react-select'
import { Section } from './Style'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "react-query";
import moment  from "moment"
import Report from './report'
import Loading from '../Loading/Loading';
import api from '../../redux/utils/api';



  const ReportList = async (id) => {

    const idd = id.queryKey[1]
   
    const res = await fetch(`/api/getReportList/${idd}`);
    return res.json();
  };
  
function Reports() {
  const [ city , setCity] = useState('')   
const [ relay , setrelay] = useState('')  

  const { data:datas, statuss  } = useQuery(["ReportList" , relay.value ], ReportList ,
  {
     
      refetchInterval: 1000,
    }
  
  );

  const { isLoading, error, data:data1 } = useQuery('relayUserRelay', () =>
  api('relayUserRelay'))


  console.log(data1)
 

   
    const handleChange = (selectedOption) => {
      setCity(selectedOption );
    }
    const handleChange2 = (selectedOption) => {
      setrelay(selectedOption );
    }

    const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  

    
    //   const start = moment(startDate).format('DD-MM-YYYY')
    //   const ed = moment(start, "DD-MM-YYYY").subtract(1, 'days').format('YYYY-MM-DD')
     
    
   
    //  const sd =   moment(endDate, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') 
   
    //  console.log(ed)
    //  console.log(sd)
   
  //  const  result = data.filter(d => {var time = d.reading_time
    
  //           return   time <= sd &&  ed <= time
         
  //       });
   
  //       console.log(result)
    return (
        <>
     

          
        <Section>

{isLoading ? (
        <div></div>
      ) : (

           
 <>
 <div className="field" >
     <label>Select Relay</label>
 <Select 
value={relay}
onChange={handleChange2}
options={data1.data.filter(sets => sets.networkName === city.value)[0].relayNetwork.map(t => ({ value: t.relayNetworkName, label: t.relayNetworkName})) } />

</div>
{relay === '' ? 
(null) :
(
<>
 {datas === undefined ? 
   (
     <div className="wrapper" > 

     <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1615785167/cm5bk5luzcwquerawyfc.gif" ></img>
     
     </div>
   ):
 
   (
     <Report data={datas} />
   )
 
 }
 </>
)
}

  </>


   
      )}


        </Section>

     
    </>
    )
}

export default Reports


