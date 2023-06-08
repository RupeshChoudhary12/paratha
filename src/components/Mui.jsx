import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const Mui = () => {
  return (
    <Grid className=" special-card-sect"
    item
    sm={12}
    xs={6}
    md={2}
  >
    <Card className="special-card" data-aos="zoom-in">
      <CardMedia className="special-card-img">
       <img src="src\assets\2.png" alt="" />
      </CardMedia>
      <CardContent>
        <Typography className="card-data">rupesh</Typography>
        <Typography className="card-data1">rate</Typography>
        <Typography className="card-data2">Rs : price</Typography>
      </CardContent>
      <Button>Hello</Button>
    </Card>
  </Grid>
  )
}

export default Mui
