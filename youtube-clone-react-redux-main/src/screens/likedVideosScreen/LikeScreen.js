import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import Video from '../../components/video/Video'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import { useDispatch, useSelector } from 'react-redux'
import {
   getLikedVideos
} from '../../redux/actions/videos.action'

import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../components/skeletons/SkeletonVideo'

const LikeScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getLikedVideos())
   }, [dispatch]);

   const {videos, loading} = useSelector(
       state => state
   )

   useEffect(() => {
       console.log(videos);
   },[videos]);

   return (
       <Container>
            <h1>hello</h1>
       </Container>
   )
}

export default LikeScreen