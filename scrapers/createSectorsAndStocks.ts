import axios from 'axios';
import * as cheerio from 'cheerio';
import { data } from 'cheerio/lib/api/attributes';
import { CreateSectorDto } from 'src/sectors/dto/create-sector.dto';
import { CreateStockDto } from 'src/stocks/dto/create-stock.dto';

 const localUrl = 'http://localhost:3000/';

async function fetchPage(url: string): Promise<string | undefined> {
    const HTMLData = axios
      .get(url)
      .then(res => res.data)
      .catch((error: any) => {
        console.error(`There was an error with ${error.config.url}.`);
        console.error(error.toJSON());
      });
    return HTMLData;
  }
  async function createSector(sector: CreateSectorDto): Promise<string | undefined> {

    const sec = axios
      .post(localUrl+"sectors",sector)
      .then(res => res.data)
      .catch((error: any) => {
        console.error(`There was an error with ${error.config.url}.`);
        console.error(error.toJSON());
      });
    return sec;
  }
  async function createStock(stock: CreateStockDto): Promise<string | undefined> {

    const sec = axios
      .post(localUrl+"stocks",stock)
      .then(res => res.data)
      .catch((error: any) => {
        console.error(`There was an error with ${error.config.url}.`);
        console.error(error.toJSON());
      });
    return sec;
  }

  (async () => {
  const HTML = await fetchPage("https://dps.psx.com.pk/sector-summary/sectorwise")
  //console.log(HTML)
  const $ = cheerio.load(HTML);
  const table = $('table');
//   console.log(table);
    // let headers = table.find('thead').map((index, element) => $(element).text().trim()).get();
    // //console.log(headers[0])
    // let rows = table.find('tbody tr').map((index, element) =>{
    //     return $(element).find('td').map((index, element) => {
    //         if (index === 1)
    //         return $(element).text().trim()
    //     }).get();
    //   }).get();
    //  // console.log(rows[1])
    //   for(let i =0; i<rows.length; i++){
    //     let sec:CreateSectorDto ={name:rows[i]}
    //     await createSector(sec) 
    //   }
    for(let jj = 1; jj <= $(table).length; jj++)
    {
      let table1 = $('table').eq(jj);
     let rows1: CreateStockDto[] = table1.find('tbody tr').map((index, element) =>{
        return {symbol: $(element).find('td strong').eq(0).text().trim(),
                name: $(element).find('td strong').eq(1).text().trim(),
                currentPrice:parseFloat($(element).find('td').eq(6).text().trim()),
                currentVolume: parseFloat($(element).find('td').eq(9).text().trim()),
                sectorId:jj+1
    };
      }).get();

     // console.log(rows1)
      for(let i =0; i<rows1.length; i++){
            let stock:CreateStockDto =rows1[i]
            //console.log(stock)
            await createStock(stock) 
         }
        
      }

})();

