import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class UniqueIdGeneratorService {
    getUniqueId() {
        const randomness = Math.random().toString(36).slice(2, 11);
        return randomness;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: UniqueIdGeneratorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: UniqueIdGeneratorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: UniqueIdGeneratorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlZ2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pdm9yeS10cmVlL3NyYy9saWIvcHJvdmlkZXJzL3VuaXF1ZWdlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyx3QkFBd0I7SUFFbkMsV0FBVztRQUNULE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzhHQUxVLHdCQUF3QjtrSEFBeEIsd0JBQXdCLGNBRnZCLE1BQU07OzJGQUVQLHdCQUF3QjtrQkFIcEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVuaXF1ZUlkR2VuZXJhdG9yU2VydmljZSB7XG5cbiAgZ2V0VW5pcXVlSWQoKSB7XG4gICAgY29uc3QgcmFuZG9tbmVzcyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDExKTtcbiAgICByZXR1cm4gcmFuZG9tbmVzcztcbiAgfVxuXG59XG4iXX0=