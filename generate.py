from staticjinja import Site
import os

photos_path = "photos"

def get_photos():
    photonames = os.listdir(photos_path)
    for photoname in photonames:
        if photoname.startswith("."):
            photonames.remove(photoname)
    # append path 
    photonames = [photos_path + "/" + photoname for photoname in photonames]
    print(photonames)
    # sort by name
    return sorted(photonames) 

if __name__ == "__main__":
    photos = get_photos()
    site = Site.make_site( contexts = [ ("photos.html", {"photos": photos }) ] )
    site.render()
