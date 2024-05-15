import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { StockCard } from "../StockCard";
export const Profile = () => {
    const [userData, setUserData] = useState({})
    const [systemData, setSystemData] = useState([])
    const { id } = useParams();
    // We can use the id to make a fetch reques to fetch the user information
    useEffect(()=> {
        fetch(`/api/users/${id}`)
        .then(res => res.json())
        .then(userResponseData=> setUserData(userResponseData.data))
        fetch(`/api/users/${id}/products`)
        .then(systemRes => systemRes.json())
        .then(systemResponseData=> setSystemData(systemResponseData.data))
        // Fetch the user system data
    }, [])
    return (
        <>
            <h1>Profile for {userData?.name}</h1>
            <h2>Your systems:</h2>
            <section>
            {
              systemData.map((item, index) =>
                <StockCard
                  id={item.id}
                  index={index}
                  name={item.name}
                  image={item.image}
                  count={item.count}
                  user_id={item.user_id}
                  // setInventory={setInventory}

                />
              )
            }
            </section>
        </>
    )
}