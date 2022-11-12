import { useEffect, useState } from 'react';
import Head from 'next/head';

import {
  Title,
  Grid,
  Container,
  Center,
  Text,
  SimpleGrid,
  Button,
} from '@mantine/core';


import DropdownSelect from '../components/DropdownSelect';
import MapComponent from '../components/MapComponent';

import { ApiResponse, FuelEconomyApiValue,FuelEconomyApiVehicle } from '../shared/interfaces';

export default function Home() {
  const [years, updateYears] = useState([] as FuelEconomyApiValue[]);
  const [selectedYear, updateSelectedYear] = useState<string | null>(null);

  const [makes, updateMakes] = useState([] as FuelEconomyApiValue[]);
  const [selectedMake, updateSelectedMake] = useState<string | null>(null);

  const [models, updateModels] = useState([] as FuelEconomyApiValue[]);
  const [selectedModel, updateSelectedModel] = useState<string | null>(null);

  const [trims, updateTrims] = useState([] as FuelEconomyApiValue[]);
  const [selectedTrim, updateSelectedTrim] = useState<string | null>(null);

  const [vehicle, updateVehicle] = useState<FuelEconomyApiVehicle | null>(null);

  useEffect(() => {
    getYears();
  },[]);

  async function getYears() {
    const res: ApiResponse<FuelEconomyApiValue[]> = await (await fetch('http://localhost:3000/api/vehicle/years')).json();

    updateYears(res.result as FuelEconomyApiValue[]);
  }

  async function getMakes(year: string) {
    const res: ApiResponse<FuelEconomyApiValue[]> = await (await fetch(`http://localhost:3000/api/vehicle/makes?year=${year}`)).json();

    updateMakes(res.result as FuelEconomyApiValue[]);
  }

  async function getModels(make: string) {
    const res: ApiResponse<FuelEconomyApiValue[]> = await (await fetch(`http://localhost:3000/api/vehicle/models?year=${selectedYear}&make=${make}`)).json();

    updateModels(res.result as FuelEconomyApiValue[]);
  }

  async function getTrims(model: string) {
    const res: ApiResponse<FuelEconomyApiValue[]> = await (await fetch(`http://localhost:3000/api/vehicle/trims?year=${selectedYear}&make=${selectedMake}&model=${model}`)).json();

    updateTrims(res.result as FuelEconomyApiValue[]);
  }

  async function getVehicle() {
    const res: ApiResponse<FuelEconomyApiVehicle> = await (await fetch(`http://localhost:3000/api/vehicle/${selectedTrim}`)).json();

    console.log(res.result);

    updateVehicle(res.result as FuelEconomyApiVehicle);
  }

  function setYear(year: string) {
    updateSelectedYear(year);
    getMakes(year);

    updateSelectedMake(null);

    updateSelectedModel(null);
    updateModels([]);

    updateSelectedTrim(null);
    updateTrims([]);

    updateVehicle(null);
  }

  function setMake(make: string) {
    updateSelectedMake(make);
    getModels(make);

    updateSelectedModel(null);

    updateSelectedTrim(null);
    updateTrims([]);

    updateVehicle(null);
  }

  function setModel(model: string) {
    updateSelectedModel(model);
    getTrims(model);

    updateSelectedTrim(null);

    updateVehicle(null);
  }

  function resetForm() {
    updateSelectedYear(null);

    updateSelectedMake(null);
    updateMakes([]);

    updateSelectedModel(null);
    updateModels([]);

    updateSelectedTrim(null);
    updateTrims([]);

    updateVehicle(null);
  }

  return (
    <>
      <Head>
        <title>CarBon - Vehicle Carbon Calculator</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Grid>

          <Grid.Col className='debugging-border max-height' span={9}>
            <MapComponent />
          </Grid.Col>

          <Grid.Col className='debugging-border' span={3}>
            <Container mt='md'>
              <Center>
                <Title order={1}>Welcome to CarBon!</Title>
              </Center>
            </Container>

            <Container mt='md' size='xs' px='xs'>
              <Center>
                <Text>
                  {/* TODO: update this copy to reflect the updated functionality */}
                  Enter your vehicle information (year, make, model, trim) the distance of your commute (one way), and the number of days you make the commute.
                </Text>
              </Center>
            </Container>

            <Container mt='md' size='xs'>
              <DropdownSelect
                label='Select Vehicle Year'
                placeholder='Year'
                data={years}
                value={selectedYear}
                onChangeFn={setYear}
              />

              <DropdownSelect
                disabled={!selectedYear}
                label='Select Vehicle Make'
                placeholder='Make'
                data={makes}
                value={selectedMake}
                onChangeFn={setMake}
              />

              <DropdownSelect
                disabled={!selectedMake}
                label='Select Vehicle Model'
                placeholder='Model'
                data={models}
                value={selectedModel}
                onChangeFn={setModel}
              />

              {
                !!trims.length &&
                <DropdownSelect
                  disabled={!selectedModel}
                  label='Select Vehicle Trim'
                  placeholder='Trim'
                  data={trims}
                  value={selectedTrim}
                  onChangeFn={updateSelectedTrim}
                />
              }

              <SimpleGrid mt='md' cols={2}>
                <Button
                  color='red'
                  disabled={!selectedYear}
                  onClick={resetForm}
                >
                  Clear
                </Button>
                <Button
                  disabled={!selectedTrim}
                  onClick={getVehicle}
                >
                  Submit
                </Button>
              </SimpleGrid>

              {/* {vehicle && `Co2 Grams per Mile: ${vehicle.co2TailpipeGpm}`} */}

              {
                vehicle &&
                <div>
                  <p>Selected Vehicle: {vehicle.year} {vehicle.make} {vehicle.model}</p>
                  <p>Co2 Grams per Mile: {vehicle.co2TailpipeGpm}</p>
                </div>
              }
            </Container>
          </Grid.Col>

        </Grid>


      </main>

      {/* <footer>
        Footer
      </footer> */}
    </>
  );
}
