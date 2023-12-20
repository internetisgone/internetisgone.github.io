from staticjinja import Site
import os

# gallery
def generate_gallery():
    photonames = os.listdir("../photos")
    print(photonames)
    # for photoname in photonames:
    #     if photoname.startswith("."):
    #         photonames.remove(photoname)
    # sorted_names = sorted(photonames) # sort by name
    # # insert img  

    # return {'photos': ['1', '2', '3']}

if __name__ == "__main__":
    # site = Site.make_site(contexts=[("gallery.html", context)])
    site = Site.make_site()
    site.render()
