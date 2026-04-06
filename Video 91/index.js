import { unlink } from 'node:fs/promises';
import * as fs from 'node:fs'

try {
  await unlink('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (error) {
  console.error('there was an error:', error.message);
}

try{
    await unlink ("shravan.txr");
    console.log("its allready clear");
} catch (error){
    console.error("these was an error ")
}

function writefile ( ){
    fs.writeFile("./text.txt ","hey there" )
}

writefile();