# Ivory Tree

The lightweight Angular tree library powered by IVORY UI.

## Dependencies

The IVORY Tree library is built with Angular v17 and does not have any other third-party dependencies.

## Installation
```
npm i ivoryui-tree --save
```  

## Usage

Once installed you need to import our main module in your application module:
```
import { IvoryTreeModule } from 'ivoryui-tree';

@NgModule({
	declarations: [...],
	imports: [
		IvoryTreeModule
		...
	],
	providers: [...],
	bootstrap: [AppComponent]
})
export  class  AppModule { }
```

Sample data to structure the tree
```
public treeData = [{
	name: 'Root',
	children: [
		{
			name: 'Child 1',
		    children: [
				{ name: 'Grandchild 1' },
				{ name: 'Grandchild 2' }
			]
		},
		{
			name: 'Child 2',
			children: [
				{ name: 'Grandchild 3' },
				{ name: 'Grandchild 4' }
			]
		}
	]
}];
```

Tree view template
```
<ivory-tree>
	@for (item of treeData; track $index) {
		<ivory-treenode
			[node]="item"
			[nodeTitle]="item.name"
		>
		</ivory-treenode>
	}
</ivory-tree>
```


## Contributing

You can raise a GitHub issue to submit any bugs, ideas, or proposals. Your support and contribution are greatly appreciated.
