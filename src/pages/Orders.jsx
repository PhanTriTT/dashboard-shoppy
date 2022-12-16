import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid, contextMenuItems } from '../data/dummy';
import { Header } from '../components';
const Orders = () => {
  let grid;
  const toolbarClick = (args) => {
    if (grid) {
      if (args.item.id.includes('pdfexport')) {
        grid.pdfExport();
      }
      grid.excelExport();
    }
  };
  return (
    <div className='m2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Orders' category='Page' />
      <GridComponent
        ref={(g) => (grid = g)}
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowPdfExport
        allowExcelExport
        contextMenuItems={contextMenuItems}
        toolbar={['PdfExport', 'ExcelExport']}
        toolbarClick={toolbarClick}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};
export default Orders;
