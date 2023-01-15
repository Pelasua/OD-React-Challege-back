import { pagesDTO, galleryDTO } from '../dto/data.dto';
import { Router } from 'express';
import * as datajson from '../data/data.json';
export const routes = Router();

const data: pagesDTO & galleryDTO = datajson;

routes.get('/get-pages', (req, res) => {
  res.send(data.pages);
});

routes.get('/get-gallery', (req, res) => {
  res.send(data.gallery);
});
