import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a simple test",
      "https://res.cloudinary.com/demo/image/fetch/w_150,h_150,r_20,c_thumb,g_face/http://upload.wikimedia.org/wikipedia/commons/4/46/Jennifer_Lawrence_at_the_83rd_Academy_Awards.jpg"
    ),
    new Recipe(
      "A test recipe2",
      "This is a simple test2",
      "https://res.cloudinary.com/demo/image/fetch/w_150,h_150,r_20,c_thumb,g_face/http://upload.wikimedia.org/wikipedia/commons/4/46/Jennifer_Lawrence_at_the_83rd_Academy_Awards.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
