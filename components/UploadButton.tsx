import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { CloudUpload } from '@mui/icons-material';
import {tomita} from '@/public/timita'
import Link from 'next/link';




export default function UploadFile() {

  const HiddenInput = styled('input')({
    // clip: 'rect(0 0 0 0)',
    // clipPath: 'inset(0%)',
    height: 0,
    // overflow: 'hidden',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // whiteSpace: 'nowrap',
    width: 0,
  });
  
  const StyledImg = styled('img')({
    height:"200px"
  })
  

  return (
    <main>
      <Link href="/page2">page2</Link>
    <Button
    color='error'
      component="label"
      role={undefined}
      variant="contained"
      startIcon={<CloudUpload />}
       >
      <StyledImg src={tomita}/>
     <HiddenInput type='file'/>
    </Button>
    </main>
  );
}