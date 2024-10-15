import type { App } from 'vue';

import {
  ConfigProvider,
  Button,
  Menu,
  Dropdown,
  Tabs,
  Form,
  Input,
  Spin,
  Result,
  Breadcrumb,
  Modal,
  Row,
  Col,
  Divider,
  Table,
  Pagination,
  Select,
  Checkbox,
  Badge,
  Anchor,
  AnchorLink,
  Affix,
  TreeSelect,
  Tooltip,
  Popover,
  Card,
  Radio,
  RadioGroup,
  RadioButton,
  InputGroup,
  DatePicker,
  Tree,
  Transfer,
  AutoComplete,
  Tag,
  Textarea,
  Empty,
  Upload,
  Steps,
  Space
} from 'ant-design-vue/es';

export function registerGlobComp(app: App) {
  // antd components register
  app.component(ConfigProvider.name!, ConfigProvider);
  app.component(Button.name!, Button);
  app.component(Menu.name!, Menu);
  app.component(Menu.Item.name!, Menu.Item);
  app.component(Menu.SubMenu.name!, Menu.SubMenu);
  app.component(Dropdown.name!, Dropdown);
  app.component(Tabs.name!, Tabs);
  app.component(Tabs.TabPane.name!, Tabs.TabPane);
  app.component(Form.name!, Form);
  app.component(Form.Item.name!, Form.Item);
  app.component(Form.ItemRest.name!, Form.ItemRest);
  app.component(Input.name!, Input);
  app.component(Input.Password.name!, Input.Password);
  app.component(Spin.name!, Spin);
  app.component(Result.name!, Result);
  app.component(Breadcrumb.name!, Breadcrumb);
  app.component(Breadcrumb.Item.name!, Breadcrumb.Item);
  app.component(Modal.name!, Modal);
  app.component(Row.name!, Row);
  app.component(Col.name!, Col);
  app.component(Divider.name!, Divider);
  app.component(Table.name!, Table);
  app.component(Pagination.name!, Pagination);
  app.component(Select.name!, Select);
  app.component(Checkbox.name!, Checkbox);
  app.component(Badge.name!, Badge);
  app.component(Anchor.name!, Anchor);
  app.component(AnchorLink.name!, AnchorLink);
  app.component(Affix.name!, Affix);
  app.component(TreeSelect.name!, TreeSelect);
  app.component(Tooltip.name!, Tooltip);
  app.component(Popover.name!, Popover);
  app.component(Card.name!, Card);
  app.component(Radio.name!, Radio);
  app.component(RadioGroup.name!, RadioGroup);
  app.component(RadioButton.name!, RadioButton);
  app.component(InputGroup.name!, InputGroup);
  app.component(DatePicker.name!, DatePicker);
  app.component(Tree.name!, Tree);
  app.component(Transfer.name!, Transfer);
  app.component(AutoComplete.name!, AutoComplete);
  app.component(Tag.name!, Tag);
  app.component(Textarea.name!, Textarea);
  app.component('a-empty', Empty);
  app.component(Upload.name!, Upload);
  app.component(Upload.Dragger.name!, Upload.Dragger);
  app.component(Steps.name!, Steps);
  app.component(Steps.Step.name!, Steps.Step);
  app.component(Space.name!, Space);
}
