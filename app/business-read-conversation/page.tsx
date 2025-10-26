import Link from "next/link";
import GenerateReportButton from "@/components/generate-report-button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const testData = [
  {
    name: "John",
    reportName: "2017 Acura TLX Problem",
    confidenceLevel: "High",
    chatId: "c9d8f8c7-521f-4ee7-9f13-d1579b7f1d0d",
  },
  {
    name: "Tim",
    reportName: "2006 Honda CRV Problem",
    confidenceLevel: "Medium",
    chatId: "ec4ebb41-4564-4770-99f1-c4d08896055e",
  },
  {
    name: "Mary",
    reportName: "2010 BMW M3 Engine Issue",
    confidenceLevel: "Medium",
    chatId: "binging",
  },
  {
    name: "Jimmy",
    reportName: "2020 Porsche 911 GT3 Vibration At High Speed",
    confidenceLevel: "High",
    chatId: "brown",
  },
  {
    name: "Arjun",
    reportName: "2025 Mercedes S Class Wiper Problem",
    confidenceLevel: "Low",
    chatId: "5e",
  },
];

export default function BusinessReadConversation() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Report Name</TableHead>
          <TableHead>Confidence</TableHead>
          <TableHead>Link</TableHead>
          <TableHead>Report Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {testData.map((item) => (
          <TableRow key={item.chatId ?? item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.reportName}</TableCell>
            <TableCell>{item.confidenceLevel}</TableCell>
            <TableCell>
              {item.chatId ? (
                <Link
                  className="text-primary underline"
                  href={`/chat/${item.chatId}`}
                >
                  View
                </Link>
              ) : (
                <span className="text-muted-foreground">—</span>
              )}
            </TableCell>
            <TableCell>
              <GenerateReportButton chatId={item.chatId} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
