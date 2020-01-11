import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Video } from './video';

@Injectable(//{
  //providedIn: 'root'
  //}
)
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(environment.apiBaseUrl + '/videos')
  }

  addVideo(videoDetails): Observable<Video> {
    console.log(videoDetails);
    return this.http.post<Video>(environment.apiBaseUrl + '/addVideo', videoDetails);
  }

  update(video){
    return this.http.put(environment.apiBaseUrl+'/updateVideo',video);
  }

  delete(video){
    return this.http.delete(environment.apiBaseUrl+'/deleteVideo/'+video._id);
  }
}
