import React from 'react'
import { useQuery } from "react-query";
import api from '../../redux/utils/api';
import moment from 'moment'
import Loading from '../Loading/Loading';
import { Section} from './Style'


function Profile() {
  const { isLoading, error, data } = useQuery('fgetActivity', () =>
  api('/getActivity'))

 

  return (
    <Section>
     {isLoading ? (
       <Loading/>
      ) : (
        <table>
<h1>Activities</h1>
          {data.data.map(number => 
  
          <tr>
           <th id="img" > <img src="https://res.cloudinary.com/airjaldi/image/upload/v1623255714/icons8-hashtag-activity-feed-80_jcspc2.png" ></img></th>
             <th id="con"  contentEditable='true' dangerouslySetInnerHTML={{ __html:  number.message }}></th>
             <th>   {moment(number.date).format("dddd, MMMM Do YYYY, h:mm:ss a")} </th>
          </tr>
          
          )

          }
        </table>
      )}

      </Section>
  
  )
}

export default Profile
