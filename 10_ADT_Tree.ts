/**
 * ADT —— 树
 * 1、结点：
 *  该数据结构中每一个元素称为：“结点”
 *  1.1 有且只有一个根结点（root）
 *  1.2 兄弟结点：
 *    其父结点不同，但属于同一层级的结点
 *  1.3 叶子结点：
 *    ①：非root结点、②：没有子结点
 *    满足以上两个条件的称为叶子结点
 *  2、子树：
 *    一般来讲，包含子结点的结点都可以称之为子树，它本身则是该子树的根结点（root）
 *    子树通常只看其本身和其子结点的关系链
 *  3、结点的度：
 *    一个结点所拥有的子树个数，称为其结点的度。
 *  4、结点的层次：
 *    从一棵树的树根开始，树根所在层为第一层，根的孩子结点所在的层为第二层，依次类推。
 *    树中结点层次的最大值，称为这棵树的深度或者高度
 *    如果两个结点的父结点不同，但它们父结点的层次相同，那么这两个结点互为堂兄弟。
 *  5、有序树和无序树：
 *    如果一棵树中，各个结点左子树和右子树的位置不能交换，那么这棵树就称为有序树。反之，
 *    如果树中结点的左、右子树可以互换，那么这棵树就是一棵无序树。
 *  6、森林
 *    由 m（m >= 0）个互不相交的树组成的集合就称为森林
 *    前面讲到，树可以理解为是由根结点和若干子树构成的，
 *    而这若干子树本身就是一个森林，因此树还可以理解为是由根结点和森林组成的。
 *  总结：
 *    树是一种非线性存储结构，通常用来存储逻辑关系为 "一对多" 的数据。
 *    使用树结构存储的各个结点，它们之间的关系类似于家谱中的成员关系，比如有父子关系、兄弟关系、表兄弟关系等。
 */