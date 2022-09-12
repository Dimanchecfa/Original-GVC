import React, { useEffect, useState } from "react";
import { HTTP_CLIENT } from "../../../../api/client";
import Card from "../../../../components/Card";
import PageHeader from "../../../../components/pageheader";
import {
  alertClosed,
  alertPending,
} from "../../../../components/notification/index";

const AllHistory = () => {
  const [moto, setMoto] = useState([]);
  const [price, setPrice] = useState([]);
  const [motoVendue, setMotoVendue] = useState([]);
  const [motoEnStock, setMotoEnStock] = useState([]);

  useEffect(() => {
    (async () => fetchLastMonthMoto())();
    (async () => fetchLastMonthPrice())();
    (async () => fetchMotoVendue())();
    (async () => fetchMotoEnStock())();
  }, []);

  const fetchLastMonthMoto = async () => {
    alertPending();
    await HTTP_CLIENT.get("/history/lastmonth")
      .then((response) => {
        const data = response.data?.data;
        console.log(data);
        setMoto(data);

        setTimeout(() => {
          alertClosed();
        }, 500);
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
            alertClosed();
            }
        , 1500);
      });
  };

  const fetchLastMonthPrice = async () => {
    await HTTP_CLIENT.get("http://localhost:8000/api/history/lastmonth")
      .then((response) => {
        const data = response.data?.data;
        console.log(data);
        setPrice(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchMotoVendue = async () => {
    await HTTP_CLIENT.get("http://localhost:8000/api/moto/number/vendue")
      .then((response) => {
        const data = response?.data?.data;
        console.log(data);
        setMotoVendue(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchMotoEnStock = async () => {
    await HTTP_CLIENT.get("http://localhost:8000/api/moto/number/stocker")
      .then((response) => {
        const data = response?.data?.data;
        setMotoEnStock(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <PageHeader title="Inventaires " subtitle="Toutes les ventes" />
      <div class="row mt-5">
        <div class="col-md-4  offset-md-2">
          <div class="card-title">
            <h3>Historique mensuelles</h3>
          </div>
          <Card
            title="Nombre de moto ecoule pour le mois dernier "
            svg={<i class="fas fa-2x fa-car"></i>}
            route="/admin/stock/vente"
            state="vente"
            data={moto}
            button="Détails"
          />
          <Card
            title="Somme encaisse pour le mois dernier"
            svg={<i class="fas fa-2x fa-usd"></i>}
            route="/admin/stock/vente"
            data={price}
            button="Details"
            unite="FCFA"
          />
        </div>
        <div class="col-md-4  offset-md-1">
          <div class="card-title">
            <h3>Historique total</h3>
          </div>
          <Card
            title="Nombre de moto vendu "
            svg={<i class="fas fa-2x fa-car"></i>}
            route="/moto_nostocked"
            state="vente"
            data={motoVendue}
            button="Details"
          />
          <Card
            title="Nombre de moto En Stock"
            svg={<i class="fas fa-2x fa-usd"></i>}
            route="/moto_stocked"
            data={motoEnStock}
            button="Details"
          />
        </div>
      </div>
    </>
  );
};

export default AllHistory;
